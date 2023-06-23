package main

func main() {
	var out [][]int
	for _, v := range [][1]int{{1}, {2}, {3}} {
		out = append(out, v[:])
	}

}
