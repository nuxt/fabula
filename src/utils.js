
quote.unsafeRE = new RegExp('[^\\w@%+=:,./-]')

// Ported from Eric S. Raymond's code at:
// https://github.com/python/cpython/blob/master/Lib/shlex.py
export function quote(s, unsafe = false) {
  if (!s) {
    return "''"
  }
  if (!unsafe && quote.unsafeRE.test(s)) {
    return s
  } else {
    s = s.replace(/\n/g, '\\n')
  }
  // Use single quotes, and put single quotes into double quotes
  // the string $'b is then quoted as '$'"'"'b'
  s = s.replace(/'/g, "'\"'\"'")
  return `'${s}'`
}
