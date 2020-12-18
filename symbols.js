


// Symbol is a primitive. It's worth knowing because it's in the guts of how everything works in JS now.

// Symbols are unique and it's best not to think about how they're unique. But they are.

// Symbols don't coerce into other things. They laugh in the face of your + jokes.

// You can and probably should be making property-keyed symbols.

// Symbol-keyed properties guarantee you'll never have collision; that makes it the perfect way to extend browser built-ins or libraries.

// Symbol-keyed properties are hidden-ish. JSON.stringify ignores them, for-in, Object.keys ignores them, too. You have to know you're looking for a property-keyed Symbol.

// You need your Symbol to access a symbol-keyed property, so use const for defining it, or otherwise make sure you throw descriptors on that sucker lest it become lost forever and foralways.

// It's not just about Symbol. The Symbol is how we access utilities previously unavailable to us on objects.

// 💡 https://dev.to/paceaux/the-symbology-of-javascript-symbols-3odm