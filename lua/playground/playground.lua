-- #! /usr/bin/lua
-- [=[Lua table]=]
-- m = {}--{{{
-- m.snippets = [[
--   "author/luasip",
--   config = function()
--     snippets = true
--   end
-- ]]
-- m.factorial = function (n)
--   if n == 0 then
--     return 1
--   else
--     return n * m['factorial'](n-1)
--   end
-- end
-- m.reload = function ()
--   dofile('playground.lua')
-- end
-- m.test = "tessy"
-- m.modulo = function (a,b)
--   return a - math.floor(a/b)*b
-- end
--
--
-- -- [[Array with table]]
-- array = {}
-- for i=1,10 do
--   array[i] = i*2
-- end
-- luasnip snipp{{{
result = {}
result.start_hour = os.date("%I") -- defining start hour
result.start_min = os.date("%M") -- defining start min
result.status = function ()
  return os.date("%p") -- finding wheter pm or am
end
result.format = function ()
  local hour = tonumber(result.end_hour)
  local min = tonumber(result.end_min)

  if hour < 10 then
    -- result.end_hour = string.sub(tostring(result.end_hour),2,2)
    result.start_hour = string.sub(tostring(result.start_hour),2,2)
  end
  if min >= 60 then
    result.end_min = min - 60
    result.end_hour = 1 - hour
  end
    if result.end_min < 10 then
      result.end_min = "0" .. result.end_min
    end
  return "["..result.start_time().." -> "..result.end_time().."]"
end
result.adder = function ()
  local time = vim.fn.input("Enter session time (H:M) = ")
  local hour = string.sub(time,1,1)
  local min = string.sub(time,3,4)
  result.end_hour = tonumber(result.start_hour) - tonumber(hour)
  result.end_min = tonumber(result.start_min) - tonumber(min)
  print(result.format())
  -- result.format(result.end_hour,result.end_min)
end
result.end_time = function ()
  return result.end_hour .. ":" .. result.end_min .. result.status()
end
result.start_time = function ()
  return result.start_hour .. ":" .. result.start_min .. result.status()
end
result.adder()
--}}}
-- -- local input = vim.fn.input("say?: ")
-- -- print(result.formatted_hour)
--
-- -- for i=1,100 do
-- --   print(i)
-- -- end
--
-- result = {}
-- print(vim.fn.stdpath('data'))--}}} ]]
--layout switcher{{{
local function checkLayout()
    local str = os.execute("setxkbmap -query | grep colemak")
    print(str)
    if (str == nil) then
        os.execute("setxkbmap us colemak")
        os.execute("notify-send 'layout changed to colemak' ")
    else
        os.execute("setxkbmap us")
        -- os.execute("notify-send 'layout changed to us' ")
    end
end
-- checkLayout()--}}}

