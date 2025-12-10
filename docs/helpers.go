package main

import (
	"crypto/rand"
	"encoding/base64"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/joho/godotenv"
)

// loadEnv loads environment variables from a .env file.
func loadEnv() error {
	if err := godotenv.Load(); err != nil {
		log.Printf("No .env file found: %v", err)
		return err // Optional: return error if .env is critical
	}
	return nil
}

// generateRandomString generates a random string of the specified length.
func generateRandomString(length int) (string, error) {
	b := make([]byte, length)
	_, err := rand.Read(b)
	if err != nil {
		return "", err
	}
	return base64.URLEncoding.EncodeToString(b), nil
}

// parseJWT parses a JWT token string and returns the claims.
func parseJWT(tokenString string, signingKey []byte) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return signingKey, nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("invalid token")
}

// createJWT creates a JWT token with the given claims and signing key.
func createJWT(claims jwt.MapClaims, signingKey []byte, expirationTime time.Duration) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims = claims

	// Set expiration time
	claims["exp"] = time.Now().Add(expirationTime).Unix()

	tokenString, err := token.SignedString(signingKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

// getAPIKey retrieves the API key from the request header.
func getAPIKey(r *http.Request) (string, bool) {
	apiKey := r.Header.Get("X-API-Key")
	if apiKey == "" {
		return "", false
	}
	return apiKey, true
}

// validateAPIKey checks if the provided API key is valid.
func validateAPIKey(apiKey string) bool {
	validAPIKeys := strings.Split(os.Getenv("VALID_API_KEYS"), ",")
	for _, validKey := range validAPIKeys {
		if apiKey == validKey {
			return true
		}
	}
	return false
}

// logRequest logs information about the incoming request.
func logRequest(r *http.Request) {
	log.Printf("Request: Method=%s, URL=%s, RemoteAddr=%s, UserAgent=%s",
		r.Method, r.URL.String(), r.RemoteAddr, r.UserAgent())
}