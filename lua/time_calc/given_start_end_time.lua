local time = {}
local functions = {}
local helper_functions = {}

time.start_time = vim.fn.input("Enter start time(24H:M) ")
time.end_time = vim.fn.input("Enter end time(24H:M) ")

helper_functions.into_seconds = function(time)
	local hour = tonumber(string.sub(time, 1, 2))
	local min = tonumber(string.sub(time, 4, 5))

	return (hour * 60 ^ 2) + (min * 60)
end

helper_functions.into_time = function(time)
	local minute_in_sec = time % (60 ^ 2) -- hour % (60x60) = minute; 1h = 60minx60sec = 3600seconds

	if minute_in_sec ~= 0 then
		local hour = (time - minute_in_sec) / (60 ^ 2)
	end
	local hour = (time - minute_in_sec) / (60 ^ 2)
	local min = minute_in_sec / 60

	return { hour, min }
end

helper_functions.status = function(time)
	local hour = tonumber(string.sub(time, 1, 2))
	local min = tonumber(string.sub(time, 4, 5))

	local xtime = os.time({ day = 1, year = 1, month = 1, hour = hour, min = min })
	return os.date("%p", xtime)
end

helper_functions.tbl_to_string = function(tbl) -- {{{
    return tbl[1] .. ":" .. tbl[2].."0 H"
end -- }}}

functions.calculate_duration = function(start_time, end_time)
	local start_sec = helper_functions.into_seconds(start_time)
	local end_sec = helper_functions.into_seconds(end_time)
	local duration_sec = end_sec - start_sec
	local duration = helper_functions.into_time(duration_sec)

	return duration
end

functions.format = function()
	local start_time = time.start_time .. helper_functions.status(time.start_time)
	local end_time = time.end_time .. helper_functions.status(time.end_time)
	return "{"
		.. helper_functions.tbl_to_string(functions.calculate_duration(time.start_time, time.end_time))
		.. "} "
		.. "[ "
		.. start_time
		.. " -> "
		.. end_time
		.. " ]"
end

return (functions.format())

