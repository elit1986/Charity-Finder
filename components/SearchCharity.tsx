'use client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { causes } from '@/constants';

interface SearchCharityProps {
  charity: string;
  setCharity: (charity: string) => void;
}

const SearchManufacturer = ({ charity, setCharity }: SearchCharityProps) => {
  const [query, setQuery] = useState('');

  const filteredCharities =
    query === ''
      ? causes
      : causes.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search-charity">
      <Combobox value={charity} onChange={setCharity}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/button-logo.jpg"
              width={20}
              height={20}
              className="ml-4"
              alt="charity logo"
            />
          </Combobox.Button>

          <div className="search-bar-container">
            <Combobox.Input
              className="search-charity__input"
              displayValue={(item: string) => item}
              onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
              placeholder="Search a Charity..."
            />
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredCharities.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className="search-charity__option"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredCharities.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-charity__option ${
                        active ? 'bg-custom-green text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>

                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? 'text-white'
                                : 'text-pribg-primary-purple'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
