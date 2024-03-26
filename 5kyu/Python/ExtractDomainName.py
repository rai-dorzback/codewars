'''
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

Only needs to handle case of http, https, www., and no beginning
'''

def domain_name(url):
    url = url.replace('www.', '')
    url = url.replace('https://', '')
    url = url.replace('http://', '')
    return url.split('.')[0]
