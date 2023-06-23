local t = {
	a = "aah",
	b = "bee",
	c = "see",
	d = "dee",
	e = "eee",
	f = "eff",
	g = "gee",
	h = "aych",
	i = "eye",
	j = "jay",
	k = "kay",
	l = "el",
	m = "em",
	n = "en",
	o = "ooh",
	p = "pee",
	q = "queue",
	r = "arr",
	s = "ess",
	t = "tee",
	u = "you",
	v = "vee",
	w = "doubleyou",
	x = "ex",
	y = "why",
	z = function()
		return is_canadian and "zed" or "zee"
	end,
	["?"] = function()
		return is_canadian and "eh" or ""
	end,
}
function sayit(letters)
	for _, v in ipairs(letters) do
		local s = type(t[v]) == "function" and t[v]() or t[v] or "blah"
		print(s)
	end
end
sayit({ "h", "e", "l", "l", "o", "H" })
