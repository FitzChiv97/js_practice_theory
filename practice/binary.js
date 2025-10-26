//toBinary

function toBinary(decimal) {
  let binary = '';

  while(decimal > 0) {
    binary += (decimal % 2);
    console.log(`binary: ${binary}`);

    decimal = Math.floor(decimal / 2);
    console.log(`decimal: ${decimal}`);
  };

  return binary;
};

console.log(toBinary(53));

//or Number.toString(radix) or String.parseInt(str,radix)