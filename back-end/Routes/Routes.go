package Routes

import (
	controllers "back-end/Controllers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	route := r.Group("/route")
	{
		route.GET("todo", controllers.GetTodos)
		route.POST("todo", controllers.CreateATodo)
		route.GET("todo/:id", controllers.GetATodo)
		route.PUT("todo/:id", controllers.UpdateATodo)
		route.DELETE("todo/:id", controllers.DeleteATodo)
	}
	return r
}
