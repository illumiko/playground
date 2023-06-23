package main

import (
	"fmt"
	"reflect"
)

func main() {
	var getString func(int) reflect.Value
	fmt.Println(getString(2))

}
