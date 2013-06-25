module CalcString (calc) where

calc :: String -> Int

calc = sum . filter (< 1001) . map fst . concat . map reads . lines . custom

  where custom ('/':'/':d:ds) = break (d:",") `map` ds
        custom ds             = break ","     `map` ds
        break cs c | elem c cs = '\n' | otherwise = c
