import { BOOKING_URL } from "./config";

export default function BookLink({ children, className = "btn" }: { children: React.ReactNode; className?: string }) {
  if (BOOKING_URL) {
    return <a className={className} href={BOOKING_URL} target="_blank" rel="noopener">{children}</a>;
  }
  return <a className={className} href="#lead">{children}</a>;
}
