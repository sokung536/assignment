package main

import (
	// "log"
	"backend/database"
	"backend/routes"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	
)

// func main() {
// 	// เชื่อมต่อ Database
// 	database.Connect()

// 	// สร้าง Router
// 	r := gin.Default()

// 	// ตั้งค่า Routes
// 	routes.UserRoutes(r)
// 	routes.AuthRoutes(r)

// 	// เริ่ม Server
// 	log.Println("Server running on port 8080")
// 	log.Fatal(r.Run(":8080"))
// }

func main() {
	database.Connect()
    r := gin.Default()

    // เปิดใช้งาน CORS
    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"}, // อนุญาตเฉพาะจาก React Frontend
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"}, // HTTP methods ที่อนุญาต
        AllowHeaders:     []string{"Content-Type", "Authorization"}, // Headers ที่อนุญาต
        AllowCredentials: true,
    }))

    // ตั้งค่า Routes
    routes.UserRoutes(r)
	routes.AuthRoutes(r)

    // รันเซิร์ฟเวอร์
    r.Run(":8080")
}