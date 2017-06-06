function listButtons(gamepad) {
  for (var i = 0; i < gamepad.buttons.length; i++) {
      var b = gamepad.buttons[i];
      var pressed, val;
      if (typeof(b) == "object") {
        pressed = b.pressed;
        val = b.value;
      } else {
        val = b;
        pressed = b == 1.0;
      }
      console.log("Button %d: %s (%f)", i, pressed ? "pressed" : "not pressed", val);
  }
}