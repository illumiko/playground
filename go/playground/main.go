package main

// go running async code in a sync manner //
// func main() { // {{{
// 	/* ch := make(chan string)
// 	go fibonacci("first", 10, ch)
// 	go fibonacci("second", 20, ch)
// 	for msg := range ch {
// 		fmt.Println(msg)
// 	} */
// 	print("first", 5)
// 	print("2nd", 4)
//
// }
//
// func print(b string, asu int) {
//
// 	var wagru sync.WaitGroup
//
// 	for i := 0; i < asu; i++ {
// 		wagru.Add(1) // sending
//
// 		go func(ii int) {
// 			fmt.Println("from", b, "__", ii)
// 			wagru.Done() // accepted
// 		}(i)
//
// 	}
// 	defer fmt.Println("done")
// 	defer wagru.Wait() //wagru all done
// }
//
// func fibonacci(id string, max int, ch chan string) {
// 	fib := []int{}
// 	fib = append(fib, 0)
// 	fib = append(fib, 1)
// 	ch <- strconv.Itoa(fib[0]) + " " + id
// 	ch <- strconv.Itoa(fib[1]) + " " + id
// 	for i := 2; i < max; i++ {
// 		fib = append(fib, fib[i-1]+fib[i-2])
// 		ch <- strconv.Itoa(fib[i]) + " " + id
// 		// fib[i] = i
// 	}
// 	defer close(ch)
// } // }}}

// go string lib//
/* func main() {// {{{
	flt := float64(3)
	conv := strconv.FormatFloat(flt, f, 3, 64)
	fmt.Println(flt)

}// }}} */

// Uses of creating a err-type //
/* type Error string// {{{

func (e Error) Error() string {
	return string(e)
}

const err = Error("EOF")

func main() {
	fmt.Println(err.Error())
}// }}} */

// go concurrency
// //wait group
/* var wg_call_str sync.WaitGroup// {{{

func main() {
	wg_call_str.Add(2)
	go Call_str("Hi", 5)
	go Call_str("Lol", 10)
	fmt.Println(runtime.NumCPU())
}
func Call_str(call string, n int) {
	for i := 0; i < n; i++ {
		fmt.Println(call)
		time.Sleep(time.Second)
	}
	wg_call_str.Done()
}// }}} */
// //channels
/* // {{{
const calls = 1000

var wg sync.WaitGroup

func main() {
	wg.Add(calls)
	ping := make(chan int)
	go sender(ping, calls)
	receiver(ping)
	wg.Wait()
}

func sender(ch chan<- int, max int) {
	for {
		if val := rand.Intn(max); val == 0 {
			close(ch)
			return
		} else {
			ch <- val
		}
	}
}

func receiver(ch <-chan int) {
	for i := 0; i < calls; i++ {
		// go func() {
		defer wg.Done()
		for v := range ch {
			fmt.Println(v)
		}
		// }()
	}
}

// }}} */

// Defer
// // {{{ modifying the return value with defer funcs
// /* func main() {
// 	fmt.Println(Triple(2))
// }
// func Triple(n int) (r int) {
// 	defer func() {
// 		r += n // modify the return value
// 	}()
// 	r = n + n
// 	return
// 	// frirst this gets evaluated into 'r' as its name of return val
// 	// then the defer with the value of 'n+n' executes 'r+n'.
// } // }}} */
/* //  {{{/Changing struct field value with reflect.ValueOf
func main() {
	my_struct := struct {
		Name string
		Age  int
	}{"Inari", 15}
	reflect_my_struct := reflect.ValueOf(&my_struct)
	reflect_my_struct.Elem().Field(0)

} // }}} */
/* // Recusrion{{{
func factorial(n int) (val int) {
	if n > 0 {
		val = n * factorial(n-1)
		return val
	}
	if n < 0 {
		val = n * factorial(n+1)
		return val
	}
	return 1
}

func get_slice_vals(length int, slice []string) (val string) {
	if length == 0 {
		length = 0
		return slice[length]
	} else {
		val = slice[length] + "\n" + get_slice_vals(length-1, slice)
	}
	return

}

func bubble_sort(arr []int, cap int) (sorted_arr []int) { // {{{
	if cap == 1 {
		sorted_arr = arr
		return sorted_arr
	}

	for i := 0; i < cap-1; i++ {
		if arr[i] > arr[i+1] {
			arr[i], arr[i+1] = arr[i+1], arr[i]
		}
	}
	bubble_sort(arr, cap-1)

	return arr

} // }}}
func insertion_sort(arr []int, cap int) (sorted_arr []int) {
	if cap == 1 {
		sorted_arr = arr
		return sorted_arr
	}
	for i := 1; i < cap; i++ {
		voq := arr[i]  //Value of Question
		soq := arr[:i] //Slice of Question
		fmt.Println(voq, soq)

	}
	insertion_sort(arr, cap-1)
	return
}

func main() {
	var n = []int{1, 39, 2, 9, 7, 54, 11}
	insertion_sort(n, len(n))

}

// }}} */
// Making pairs from slice

func main() {
	test := []string{"Miko", "Inari", "Luk"}
}
