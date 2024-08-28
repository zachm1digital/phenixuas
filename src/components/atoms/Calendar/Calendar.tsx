import { CalendarChangeEvent, Calendar as PrimeCalendar } from 'primereact/calendar';
import React from 'react';

interface CalendarProps {
  value?: Date | Date[];
  onChange?: ((event: CalendarChangeEvent) => void) | undefined;
  dateFormat?: string;
  locale?: string;
  showIcon?: boolean;
  minDate?: Date;
  maxDate?: Date;
  selectionMode?: 'single' | 'multiple' | 'range';
  readOnlyInput?: boolean;
  showButtonBar?: boolean;
  showTime?: boolean;
  hourFormat?: '12' | '24';
  timeOnly?: boolean;
  view?: 'date' | 'month' | 'year';
  numberOfMonths?: number;
  touchUI?: boolean;
  inline?: boolean;
  showWeek?: boolean;
  className?: string;
  disabled?: boolean;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  dateFormat,
  locale,
  showIcon,
  minDate,
  maxDate,
  selectionMode,
  readOnlyInput,
  showButtonBar,
  showTime,
  hourFormat,
  timeOnly,
  view,
  numberOfMonths,
  touchUI,
  inline,
  showWeek,
  className,
  disabled
}) => (
  <div>
    <h1>Calendar</h1>
    <PrimeCalendar
      value={value}
      onChange={onChange}
      dateFormat={dateFormat}
      locale={locale}
      showIcon={showIcon}
      minDate={minDate}
      maxDate={maxDate}
      selectionMode={selectionMode}
      readOnlyInput={readOnlyInput}
      showButtonBar={showButtonBar}
      showTime={showTime}
      hourFormat={hourFormat}
      timeOnly={timeOnly}
      view={view}
      numberOfMonths={numberOfMonths}
      touchUI={touchUI}
      inline={inline}
      showWeek={showWeek}
      className={className}
      disabled={disabled}
    />
  </div>
);

export default Calendar;
