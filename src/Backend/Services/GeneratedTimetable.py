def generate_timetable():
    timetable = {}

    opening_hours = {
        "Monday": ["08:00", "22:00"],
        "Tuesday": ["08:00", "22:00"],
        "Wednesday": ["08:00", "22:00"],
        "Thursday": ["08:00", "22:00"],
        "Friday": ["08:00", "22:00"],
        "Saturday": ["08:00", "22:00"],
        "Sunday": ["10:00", "20:00"]
    }

    employees = [
        {"name": "Jack", "hours": 40, "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
        {"name": "Josh", "hours": 30, "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
        {"name": "Harry", "hours": 16, "days": ["Saturday", "Sunday"]},
        {"name": "Jamie", "hours": 8, "days": ["Saturday", "Sunday"]}
    ]

    for employee in employees:
        name = employee["name"]
        total_hours = employee["hours"]
        days = employee["days"]
        hours_per_day = min(8, total_hours // len(days))
        schedule = []

        for day in days:
            # Calculate start time based on end time of the previous employee
            if schedule:
                prev_end_time = schedule[-1][2]
                start_hour, start_minute = map(int, prev_end_time.split(':'))
                start_time = f"{start_hour + 1:02d}:{start_minute:02d}"
            else:
                start_time = opening_hours[day][0]

            end_hour, end_minute = map(int, start_time.split(':'))
            end_time = f"{end_hour + hours_per_day:02d}:{end_minute:02d}"

            # Adjust end_time if it goes beyond closing hours
            if end_time > opening_hours[day][1]:
                end_time = opening_hours[day][1]

            schedule.append((day, start_time, end_time, hours_per_day))
            total_hours -= hours_per_day

        timetable[name] = schedule

    return timetable

def print_timetable(timetable):
    print("\nGenerated Timetable:")
    for name, schedule in timetable.items():
        print(f"\n{name}:")
        for day, start_time, end_time, hours in schedule:
            print(f"{day}: {start_time} - {end_time} ({hours} hours)")

def main():
    timetable = generate_timetable()
    print_timetable(timetable)

if __name__ == "__main__":
    main()
