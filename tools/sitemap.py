#!/usr/bin/python3

import os
import glob

url = "https://nc0.fr/"

os.chdir("src")
stm = open("sitemap.xml", "w")
stm.write('<?xml version="1.0" encoding="UTF-8"?>\n')
stm.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
for file in glob.glob("./**/*.md", recursive=True):
    # remove the extension, root path and add the html extension
    file = file[2:-3] + ".html"
    stm.write("\t<url>\n")
    stm.write("\t\t<loc>" + url + file + "</loc>\n")
    stm.write("\t</url>\n")
stm.write("</urlset>\n")
stm.close()
os.scandir
