// store/doctorsStore.ts
import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import { doctors, reviews, slots } from "./data";

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  experience: string;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  fees: string;
  about: string;
  education: string[];
  certifications: string[];
  languages: string[];
  availability: string;
};

export type AvailableSlot = {
  doctorId: number;
  date: string;
  times: string[];
};

export type Review = {
  doctorId: number;
  patient: string;
  rating: number;
  comment: string;
  date: string;
};

interface DoctorsState {
  doctors: Doctor[];
  slots: AvailableSlot[];
  reviews: Review[];
}

export const useDoctorsStore = create<DoctorsState>(() => ({
  doctors: doctors,
  slots: slots,
  reviews: reviews,
}));

export const useDoctors = () => useDoctorsStore((state) => state.doctors);
export const useDoctor = (id: number) =>
  useDoctorsStore((state) => state.doctors.find((i) => i.id === id));
export const useSlots = (id: number) =>
  useDoctorsStore(
    useShallow((state) => state.slots.filter((slot) => slot.doctorId === id))
  );
export const useReviews = (id: number) =>
  useDoctorsStore(
    useShallow((state) =>
      state.reviews.filter((review) => review.doctorId === id)
    )
  );
