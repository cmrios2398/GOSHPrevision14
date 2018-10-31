# myHealth Passport Demo

## Development

### app_page param

For development purposes, the current screen shown within the mock phone can be changed using the `app_page` url parameter.

Example: setting the url to:

```
index.html?app_page=example.html
```

will load the `app/example.html` page in the mock phone.

This allows multiple team members to work on different app pages, without needing to modify the environment page.

### disable_fullscreen param

Loading the demo in fullscreen can be disabled using the `disable_fullscreen` param:

```
index.html?disable_fullscreen=true
```

This allows team members to develop the app pages without needing to run the demo in fullscreen mode.

### location param

For development purposes, the current location the phone is shown in can be changed with the `location` url parameter.

Example: setting the url to:

```
index.html?location=park
```

will place the phone in the park location.

This makes it easier to work on an individual location without having to click through to it each time.

## Attribution

* `img/park_bg.jpg`: *CC0* https://pixabay.com/en/park-park-bench-leaves-leaf-autumn-1263179/
* `img/living_room_bg.jpg`: *CC0* https://pixabay.com/en/living-room-apartment-house-home-416035/
* `img/bedroom_bg.jpg`: *CC0* https://pixabay.com/en/living-room-interior-furniture-1530303/
