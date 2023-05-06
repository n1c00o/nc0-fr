URL := "https://nc0.fr"

site: src/*
	./tools/sitemap.py
	crocc -out=dst -url=$(URL) src

clean:
	rm -rf dst

.PHONY: site clean