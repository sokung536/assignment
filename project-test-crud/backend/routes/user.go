package routes

import (
	"backend/controllers"
	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.GET("/users", controllers.GetUsers)
	r.GET("/users/:id", controllers.GetUserByID)
	r.POST("/users", controllers.CreateUser)
	r.PUT("/users", controllers.UpdateUser)
	r.DELETE("/users/:id", controllers.DeleteUser)
}

