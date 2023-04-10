local M = {}
local time = {}
local helper_functions = {}

time.duration = vim.fn.input("Enter duration(24H:M) ")
-- time.end_time = os.date("%H:%M")
time.end_time = vim.fn.input("end_time = ")

helper_functions.into_seconds = function(time)
	local hour = tonumber(string.sub(time, 1, 2))
	local min = tonumber(string.sub(time, 4, 5))

	if hour == 0 then
		return (24 * 60 ^ 2) + (min * 60)
	end
	return (hour * 60 ^ 2) + (min * 60)
end

helper_functions.into_time = function(time)
	local minute_in_sec = time % (60 ^ 2) -- hour % (60x60) = minute; 1h = 60minx60sec = 3600seconds

	local hour = (time - minute_in_sec) / (60 ^ 2)
	local min = minute_in_sec / 60
	if hour < 10 then
		hour = 0 .. hour
	end
	if min < 10 then
		min = 0 .. min
	end

	return { hour, min }
end

helper_functions.status = function(time)
	local hour = tonumber(string.sub(time, 1, 2))
	local min = tonumber(string.sub(time, 4, 5))

	local xtime = os.time({ day = 1, year = 1, month = 1, hour = hour, min = min })
	return os.date("%p", xtime)
end

helper_functions.tbl_to_string = function(tbl) -- {{{
	-- vim.pretty_print()
	return tbl[1] .. ":" .. tbl[2]
end -- }}}

helper_functions.format = function(start_time, end_time, duration)
	return "{" .. duration .. " H" .. "} " .. "[ " .. start_time .. " -> " .. end_time .. " ]"
end

-- end_time got, duraiton got, now calc start time
M.main = function(duration, end_time)
	local end_time_seconds = helper_functions.into_seconds(end_time)
	local duraiton_seconds = helper_functions.into_seconds(duration)
	local start_time = helper_functions.tbl_to_string(helper_functions.into_time(end_time_seconds - duraiton_seconds))
	return helper_functions.format(start_time, end_time, duration)
end

return(M.main(time.duration, time.end_time))
