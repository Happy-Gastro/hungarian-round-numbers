# Hungarian Round Numbers

A simple utility function for rounding numbers according to specific Hungarian (Ft or HUF) rounding rules at payments.

## Installation
```bash
npm install @happy-gastro/hungarian-round-numbers
```

## Usage
```javascript
const hungarianRoundNumbers = require('@happy-gastro/hungarian-round-numbers');
or
import {hungarianRoundNumbers} from "@happy-gastro/hungarian-round-numbers"

console.log(hungarianRoundNumbers(130)); // Output: 130
console.log(hungarianRoundNumbers(134)); // Output: 135
console.log(hungarianRoundNumbers(132)); // Output: 130
console.log(hungarianRoundNumbers(138)); // Output: 140
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Author

This project is developed and maintained by Farkas Ferenc.

- **Name**: Farkas Ferenc
- **Email**: [ferenc.farkas@happygastro.hu](mailto:ferenc.farkas@happygastro.hu)
- **Website**: [www.happygastro.hu](http://www.happygastro.hu)

## Company

Happy Gastro Ltd.

## License
[MIT](https://choosealicense.com/licenses/mit/)