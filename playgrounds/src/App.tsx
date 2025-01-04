import { Button, Color, Text, Margin, Select } from "@ds.mhp/react/lib";
import "./App.css";

const colorOptions = [
  { label: 'Red', value: 'Red' },
  { label: 'Green', value: 'Green' },
  { label: 'Blue', value: 'Blue' },
  { label: 'Yellow', value: 'Yellow' },
  { label: 'Black', value: 'Black' },
]

const App = () => {
  return (
    <div style={{ width: '500px' }}>

      <Color hexcode="#0ff0f0" width='xxl' height='xxl' />
      <Margin space='sm'>
        <Text size="xl">Created by @mhp.dev</Text>
      </Margin>

      <Button title='monorepo button' onClick={() => alert("Hey 🔥")}>
        Click Me!
      </Button>

      <Margin>
        <Text> Select Component </Text>
        <Margin top bottom space="xs">
          <Select label="Select A Color"
            options={colorOptions}
            onOptionSelected={console.log}
            renderOption={({ option, getOptionRecommendedProps, isSelected }) =>
              <li {...getOptionRecommendedProps({ className: `custom-select-option ${isSelected ? 'custom-select-option--selected' : ''}` })}>
                <input type='checkbox' checked={isSelected} />
                <Text>{option.label}</Text>
              </li>
            }
          />
        </Margin>
        <Text> End of Select </Text>
      </Margin>
    </div>
  );
};

export default App;
