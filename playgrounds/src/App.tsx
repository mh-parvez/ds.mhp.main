import { Text, Margin, Select } from "@ds.mhp/react/lib";
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
      <Margin>
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
      </Margin>
    </div>
  );
};

export default App;
