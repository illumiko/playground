package main

import "fmt"

// func main() { // {{{ error handling
// 	/* i := -16.0
// 	x, err := sqrt(i)
// 	if err != nil {
// 		fmt.Printf("There was an error: %s\n", err)
// 	}
// 	fmt.Println(x) */
// 	result, err := sqrt(-10)
// 	if err != nil {
// 		fmt.Println("there was an error,", err)
// 	}
// 	fmt.Println(result)
// }
// func sqrt(n float64) (num float64, err error) {
// 	if n < 0 {
// 		num = 0
// 		err = fmt.Errorf("sqrt of %f is too complex", n)
// 		return
// 	}
// 	num = math.Sqrt(n)
// 	err = nil
// 	return
//
// } // }}}
/* func main() { //Testing with readers{{{
	reader := strings.NewReader("Source String")
	var first_word string
	var second_word string
	var third_word string
	n, err := fmt.Fscan(reader, &first_word, &second_word, &third_word)
	fmt.Println(n, err)
	fmt.Println(first_word)
	fmt.Println(second_word)
	fmt.Println(third_word)

} // }}} */
/* func main() { //compress and writer test{{{
	src := []byte("Squish me\n")
	buffer := new(bytes.Buffer)
	//compress our data
	w := gzip.NewWriter(buffer)
	w.Write(src)
	w.Close()
	//now buffer has our compressed data
	// decompress data in a reader ->
	gzip_reader, _ := gzip.NewReader(buffer)
	gzip_reader.Close()
	io.Copy(os.Stdout, gzip_reader)

} // }}} */
/* type info interface { //embeded structs{{{
	get_info() string
}
type cookie struct {
	name string
}

func (item cookie) get_info() (info string) {
	info = "Cookie: " + item.name + "\n"
	return
}
func (item shelf) get_info() (info string) {
	info = "Shelf size: " + strconv.Itoa(item.size) + "\n"
	return
}

type shelf struct {
	cookie
	//if only cookie implemented func get_info still the entire struct will
	//be termed as `info infeterface`
	size int
}

func info_interface_test(item info) reflect.Type {
	return reflect.TypeOf(item)

}

func main() {
	new_shelf := shelf{cookie{"chocochip"}, 20}
	fmt.Println(new_shelf.cookie.get_info())
	fmt.Printf("%v", new_shelf.get_info())
	fmt.Println(info_interface_test(new_shelf))
} // }}} */
/* func main() { //managing goroutines through channel buffering // {{{
	hentai := make(chan string)
	go func() {
		hentai <- "nhentai.net"
		time.Sleep(time.Duration(2) * time.Second)
		hentai <- "nhentai.net/femdom"
	}()
	res := <-hentai
	fmt.Println(res)
	res = <-hentai
	fmt.Println(res)
} // }}} */
/* func process(done chan bool) {// {{{
	fmt.Println("processing")
	time.Sleep(time.Second)
	fmt.Println("...done")

	done <- false
}
func main() { //channel sync
	done := make(chan bool)
	go process(done)
	<-done
	for i := 0; i < 10; i++ {
		println(i)
	}

}// }}} */
/* func reciever(giver <-chan string, receiver chan<- string) { // single_direction_file mutation{{{
	// receiver <- <- giver //or
	data := <-giver
	receiver <- data
}
func main() {
	sender := make(chan string, 1)
	getter := make(chan string, 1)
	sender <- "LOL"
	reciever(sender, getter)
	fmt.Println(<-getter)
}// }}} */
/* func query_hH(query_num int, res chan<- string) { // getting respones from multiple channel though select{{{
	for i := 0; i <= query_num; i++ {
		time.Sleep(time.Second * 1)
		res <- "found good quality hentai " + strconv.Itoa(query_num)
	}

}
func query_nhentai(query_num int, res chan<- string) {
	for i := 0; i <= query_num; i++ {
		time.Sleep(time.Second * 2)
		res <- "found good hentai doujin" + strconv.Itoa(query_num)
	}
}
func main() {
	nhentai := make(chan string)
	hH := make(chan string)
	go query_nhentai(3, nhentai)
	go query_hH(3, hH)
	for {
		select {
		case msg := <-nhentai:
			fmt.Println(msg)
		case msg := <-hH:
			fmt.Println(msg)
		}
	}
} // }}} */
/* func main() {// {{{
	messages := make(chan string)
	signal := make(chan bool)
	select {
	case msg := <-messages:
		fmt.Println(msg)
	case <-time.After(time.Second * 2):
		fmt.Println("timeout")
	default:
		fmt.Println("NO MESSAGES YOU FUCKING LOSER")
	}
	fmt.Println("---rando LOL---")
	select {
	case msg := <-messages:
		fmt.Println(msg)
	case sig := <-signal:
		fmt.Println(sig)
	default:
		fmt.Println("NO MESSAGES YOU FUCKING LOSER")
	}
	//the defauls exits the channels when no response hence its non blocking
}// }}} */
/* func process(wg *sync.WaitGroup) { // {{{ wait groups
	fmt.Println("Hello World")
	wg.Done()
}
func main() { // waitgroups
	var wg sync.WaitGroup
	wg.Add(1)
	go process(&wg)
	go wg.Wait()
	fmt.Println("NOW ITS BYE BYE WORLD")

} // }}} */
func main() { // {{{
	oni := make(chan int, 3)
	oni_complete := make(chan bool, 1)
	go func() {
		for {
			val, more := <-oni
			if more {
				fmt.Println(val, more)
			} else {
				fmt.Printf("lol")
				oni_complete <- true
			}
		}
	}()
	for j := 0; j < 4; j++ {
		oni <- j
	}
	close(oni)
	if <-oni_complete {
		fmt.Printf("HELLO IM GAYYYYYYYY")
	}
} // }}}
