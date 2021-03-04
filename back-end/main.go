package main

import (
	"io"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
	"github.com/gin-gonic/gin"
)

func Healthz(w http.ResponseWriter, r *http Request){
	log.Info("API HEALTH IS GOOD")
	w.Header().Set("Content-Type","application/json")
	io.WriteString(w,`{"alive": true}`)
}

func init() {
	log.SetFormatter(&log.TextFormatter{})
	log.SetReportCaller(true)
}
func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": "hello world"})
	})

	r.Run()
}
