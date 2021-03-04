package models

type Task struct {
	Description string `sql:"not null"`
	Completed   bool   `sql:"not null"`
}
