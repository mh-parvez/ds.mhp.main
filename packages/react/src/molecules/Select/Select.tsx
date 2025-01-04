import React, { useLayoutEffect, useRef, useState } from 'react';
import "@ds.mhp/scss/lib/Select.css"
import Text from '../../atoms/Text';

interface SelectOption {
  label: string;
  value: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  label?: string;
  options?: Array<SelectOption>;
  onOptionSelected?: (options: SelectOption, optionIndex: number) => void;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label = 'Please select an option', options = [], onOptionSelected, renderOption }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const labelRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10); // extra 10px;
  }, [labelRef.current?.offsetHeight])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: SelectOption, index: number) => {
    if (onOptionSelected) {
      onOptionSelected(option, index);
    }
    setSelectedIndex(index);
    setIsOpen(false);
  }

  let selectedOption = null;

  if (selectedIndex != null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className='mhp-select'>
      <button ref={labelRef} className='mhp-select__label' onClick={handleClick}>
        <Text> {
          selectedOption === null ? label : selectedOption.label
        }</Text>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`mhp-select__caret ${isOpen ? 'mhp-select__caret--open' : 'mhp-select__caret--close'}`} width={'1rem'} height={'1rem'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {
        isOpen && (

          <ul style={{ top: overlayTop }} className='mhp-select__overlay'>
            {
              options.map((option, index) => {

                const isSelected = selectedIndex === index;

                const renderOptionProps: RenderOptionProps = {
                  option,
                  isSelected,
                  getOptionRecommendedProps: (overrideProps = {}) => ({

                    // here we will define default props
                    key: option.value,
                    className: `mhp-select__option ${isSelected ? 'mhp-select__option--selected' : ''}`,
                    onClick: () => handleOptionClick(option, index),

                    // here we will spreed override props (user given props)
                    ...overrideProps
                  })
                };

                if (renderOption) {
                  return renderOption(renderOptionProps);
                }

                return (
                  <li
                    className={`mhp-select__option ${isSelected ? 'mhp-select__option--selected' : ''}`}
                    key={option.value}
                    onClick={() => handleOptionClick(option, index)}
                  >
                    <Text>{option.label}</Text>
                    {
                      isSelected && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={'1rem'} height={'1rem'}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>)
                    }
                  </li>
                )
              })
            }
          </ul>
        )
      }
    </div>
  )
}

export default Select;
