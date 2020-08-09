# React-Flutterwave

> This is a react package for implementing Flutterwave collection gateway

## Installation

```bash
$ npm install react-flutterwave
# or
$ yarn add react-flutterwave
```

## Examples

```javascript
import React from 'react';
import { useFlutterwave, FlutterWaveButton } from 'react-flutterwave';

export default function App() {
  const config = {
    public_key: 'YOUR_FW_PUBLIC_KEY',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '08102909304',
      name: 'yemi desola',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://assets.piedpiper.com/logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
            },
            onClose: () => {},
          });
        }}
      >
        Testing FW Payment
      </button>

      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
```

Please checkout
[Flutterwave Documentation](https://developer.flutterwave.com/docs/flutterwave-standard)
for other available options you can add to the tag

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
file for details

## Contributions ✨

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

Follow on Twitter [@somtougeh](https://twitter.com/SomtoUgeh)

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
