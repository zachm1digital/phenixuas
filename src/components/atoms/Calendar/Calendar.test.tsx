import { render, screen } from '@/tests/test-utils';

import { Calendar } from '.';

describe('Calendar', () => {
  it('should render the heading', () => {
    const mockOnChange = jest.fn();

    render(
      <Calendar
        onChange={mockOnChange}
        dateFormat="dd/mm/yy"
        locale="en"
        showIcon
        minDate={new Date()}
        maxDate={new Date()}
        selectionMode="single"
        readOnlyInput
        showButtonBar
        showTime
        hourFormat="24"
        timeOnly
        view="date"
        numberOfMonths={1}
        touchUI
        inline
        showWeek
        className="p-invalid"
        disabled
      />
    );

    // Assert
    screen.getByRole('heading', { name: /Calendar/i });
  });
});
