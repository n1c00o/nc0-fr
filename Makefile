URL := "https://nc0.fr"

site: src/*
	crocc -out=dst -url=$(URL) src

site-hidden: src/*
	crocc -out=dst -url=$(URL) -hidden src

clean:
	rm -rf dst

.PHONY: site clean