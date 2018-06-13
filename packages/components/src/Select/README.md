The Select component presents users with a list of information with single-choice or multiple-choice options. Select elements can have options filled onClick, and also support filters.

```js
const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
  { label: "Option 4", value: "four" },
  { label: "Option 5", value: "five" },
  { label: "Option 6", value: "six" },
  { label: "Option 7", value: "seven" },
  { label: "Option 8", value: "eight" }
]

class ComponentWithSelect extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: []
    }
  }

  render() {
    return (
      <Select
        label="Select label"
        value={this.state.value}
        options={options}
        filterable
        placeholder="Choose an option"
        onChange={newValue => {
          this.setState(prevState => ({
            value: newValue
          }))
        }}
      />
    )
  }
}

<OperationalUI withBaseStyles>
    <ComponentWithSelect />
</OperationalUI>
```

### Return Value

The value prop passed to select is is either an `Option` object, or an Array of `Option` objects. If it is an
array, the component automatically becomes a multi-select. The shape of an Option object is described below.

```js static
const option = {
  label: "any_string",
  value: "Any String"
}
```