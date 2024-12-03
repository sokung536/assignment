package controllers

import (
	"net/http"
	"backend/database"
	"backend/models"
	"backend/utils"
	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	var credentials models.User
	if err := c.ShouldBindJSON(&credentials); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	var user models.User
	err := database.DB.QueryRow("SELECT id, name, email, password FROM users WHERE email = ?", credentials.Email).
		Scan(&user.ID, &user.Name, &user.Email, &user.Password)
	if err != nil || !utils.CheckPasswordHash(credentials.Password, user.Password) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	token := utils.GenerateJWT(user.ID, user.Email)
	c.JSON(http.StatusOK, gin.H{"token": token})
}