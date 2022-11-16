package main

import (
	"fmt"
	"strconv"
)

// go running async code in a sync manner //
//
//	func main() { // {{{
//		/* ch := make(chan string)
//		go fibonacci("first", 10, ch)
//		go fibonacci("second", 20, ch)
//		for msg := range ch {
//			fmt.Println(msg)
//		} */
//		print("first", 5)
//		print("2nd", 4)
//
// }
//
// func print(b string, asu int) {
//
//		var wagru sync.WaitGroup
//
//		for i := 0; i < asu; i++ {
//			wagru.Add(1) // sending
//
//			go func(ii int) {
//				fmt.Println("from", b, "__", ii)
//				wagru.Done() // accepted
//			}(i)
//
//		}
//		defer fmt.Println("done")
//		defer wagru.Wait() //wagru all done
//	}
//
//	func fibonacci(id string, max int, ch chan string) {
//		fib := []int{}
//		fib = append(fib, 0)
//		fib = append(fib, 1)
//		ch <- strconv.Itoa(fib[0]) + " " + id
//		ch <- strconv.Itoa(fib[1]) + " " + id
//		for i := 2; i < max; i++ {
//			fib = append(fib, fib[i-1]+fib[i-2])
//			ch <- strconv.Itoa(fib[i]) + " " + id
//			// fib[i] = i
//		}
//		defer close(ch)
//	} // }}}
//
// go string lib//
func main() {
	flt := float64(3)
	conv := strconv.FormatFloat(flt, f, 3, 64)
	fmt.Println(flt)

}
