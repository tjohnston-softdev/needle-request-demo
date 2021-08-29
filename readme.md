# Needle Request Demo

This is a simple demo project for the [needle](https://www.npmjs.com/package/needle) Node JS HTTP library. It sends a GET and POST request to the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) test API in order to demonstrate the library's functionality.

When I first started using Node JS, I used the [request](https://www.npmjs.com/package/request) library for making HTTP requests. Unfortunately, it has been depreciated as of 2020. The package still gets over 15 million downloads per week so I don't think that minor detail was very discouraging. However, I decided that I needed to find a new HTTP library that is being actively developed.

Initially, I settled with [axios](https://www.npmjs.com/package/axios) but I found the promise structure to be a bit of a pain. I prefer to use callbacks where possible like what 'request' provided. I did some more searching and found 'needle', which offers both promise and callback structures.

The 'needle' library is both actively used and maintained with regular updates and several million downloads per week.

---

## Usage

1. Open a terminal in the project folder
2. Run `npm install` to download the 'needle' package.
3. Run `node index` to execute the HTTP demo.

---

## Endpoints

**GET:** https://jsonplaceholder.typicode.com/posts/1

**POST:** https://jsonplaceholder.typicode.com/posts

```
{
	"title": "Hello World",
	"body": "The quick Brown Fox jumps over the lazy Dog",
	"userId": 1
}
```

API provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## Credits

* [@tjohnston-softdev](https://github.com/tjohnston-softdev) - Demo project.
* [@tomas](https://github.com/tomas) - Lead developer of 'needle' library.
* [@typicode](https://github.com/typicode) - Host of JSONPlaceholder fake API.

---

## Disclaimer

This demo project is licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). I only wrote this as a reference for using the 'needle' library to make HTTP requests. This is not an official demo and I am in no way affiliated with [@tomas](https://github.com/tomas) or anybody else who has worked on the 'needle' library. While I will make an effort to maintain this repository where applicable, I do not accept any responsibility for how you use this code or 'needle' as a whole.
