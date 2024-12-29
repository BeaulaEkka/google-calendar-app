import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getMonth } from "./getTime";

interface ViewStoreType {
  selectedView: string;
  setView: (value: string) => void;
}

interface DateStoreType {
  userSelectedDate: Dayjs;
  setDate: (value: Dayjs) => void;
  twoMonthArray: dayjs.Dayjs[][];
  selectedMonthIndex: number;
  setMonth: (index: number) => void;
}

export const useViewStore = create<ViewStoreType>()(
  devtools(
    persist(
      (set) => ({
        selectedView: "month",
        setView: (value: string) => {
          set({ selectedView: value });
        },
      }),
      { name: "calendar_view", skipHydration: true }
    )
  )
);

export const useDateStore = create<DateStoreType>()(
  devtools(
    persist(
      (set) => ({
        //initial state
        userSelectedDate: dayjs(),
        twoMonthArray: getMonth(),
        selectedMonthIndex: dayjs().month(),
        setDate: (value: Dayjs) => {
          set({ userSelectedDate: value });
        },
        setMonth: (index) => {
          set({ twoMonthArray: getMonth(index), selectedMonthIndex: index });
        },
        // setDay: (index) => {
        //   set({ userSelectedDate: dayjs().add(index, "day") });
        // },
      }),
      { name: "date_data", skipHydration: true }
    )
  )
);

export type CalendarEventType = {
  id: string;
  title: string;
  date: dayjs.Dayjs;
  description: string;
};

type EventStore = {
  events: CalendarEventType[];
  isPopOverOpen: boolean;
  isEventSummaryOpen: boolean;
  selectedEvent: CalendarEventType | null;
  setEvent: (event: CalendarEventType[]) => void;
  openPopover: () => void;
  closePopover: () => void;
  openEventSummary: (event: CalendarEventType) => void;
  closeEventSummary: () => void;
};
