'''
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
'''
# method 1
def remove_url_anchor(url):
    return url.split('#')[0]

# method 2: same as 1 but with lambda
remove_url_anchor = lambda url: url.split('#')[0]
