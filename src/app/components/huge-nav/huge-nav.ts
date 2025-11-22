import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-huge-nav',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './huge-nav.html',
  styleUrl: './huge-nav.css',
})
export class HugeNav {
  isMobile = false

  constructor(cd: ChangeDetectorRef, activeRoute: ActivatedRoute, public router: Router) {
    let mediaQuery = window.matchMedia("(max-width: 1023px)")

    const checkScreenWidth = (e: any) => {
      this.isMobile = e.matches;
    }
    mediaQuery.addEventListener("change", (e) => {
      checkScreenWidth(e)
      cd.detectChanges()
    })
    checkScreenWidth(mediaQuery)


    activeRoute.url.subscribe(url => {
      if (url.length === 0) return

      let tunnel = this.getRouteFromFragments(url[0].path, url[1]?.path, url[2]?.path)

      if (tunnel[0]) {
        this.menuLogic.parent = tunnel[0]
        this.menuAnimation.areSubParentRoutesVisible = true
      }
      if (tunnel[1]) {
        this.menuLogic.subParent = tunnel[1]
        this.menuAnimation.areChildRoutesVisible = true
      }
    })
  }

  /*
  * There are 3 types of routes
  *   Parents
  *   Sub-parents
  *   Children
  * Each route has a label and a route
  * Each parent and sub-parent route has a list of children routes
  *
  * */
  shownRoutes: NavRoute[] = [
    /* ========================================
       1. TECHNOLOGY
    ======================================== */
    {
      data: {id: 1, label: "Technology"},
      route: "/technology",
      children: [
        {
          data: {id: 1, label: "Smart Devices"},
          route: "/technology/smart-devices",
          children: [
            {data: {id: 1, label: "Smartphones"}, route: "/technology/smart-devices/smartphones"},
            {data: {id: 2, label: "Smartwatches"}, route: "/technology/smart-devices/smartwatches"},
            {data: {id: 3, label: "Smart TVs"}, route: "/technology/smart-devices/smart-tvs"},
            {data: {id: 4, label: "Home Assistants"}, route: "/technology/smart-devices/home-assistants"},
            {data: {id: 5, label: "VR Headsets"}, route: "/technology/smart-devices/vr-headsets"},
            {data: {id: 6, label: "Drones"}, route: "/technology/smart-devices/drones"},
            {data: {id: 7, label: "Wearable Trackers"}, route: "/technology/smart-devices/wearables"}
          ]
        },
        {
          data: {id: 2, label: "Software"},
          route: "/technology/software",
          children: [
            {data: {id: 1, label: "Operating Systems"}, route: "/technology/software/operating-systems"},
            {data: {id: 2, label: "Productivity Tools"}, route: "/technology/software/productivity"},
            {data: {id: 3, label: "Design Tools"}, route: "/technology/software/design-tools"},
            {data: {id: 4, label: "Developer Tools"}, route: "/technology/software/developer-tools"},
            {data: {id: 5, label: "Security Software"}, route: "/technology/software/security"},
            {data: {id: 6, label: "Cloud Platforms"}, route: "/technology/software/cloud"},
            {data: {id: 7, label: "AI Tools"}, route: "/technology/software/ai-tools"}
          ]
        },
        {
          data: {id: 3, label: "Hardware"},
          route: "/technology/hardware",
          children: [
            {data: {id: 1, label: "Laptops"}, route: "/technology/hardware/laptops"},
            {data: {id: 2, label: "Desktops"}, route: "/technology/hardware/desktops"},
            {data: {id: 3, label: "PC Components"}, route: "/technology/hardware/components"},
            {data: {id: 4, label: "Networking Devices"}, route: "/technology/hardware/networking"},
            {data: {id: 5, label: "Storage Devices"}, route: "/technology/hardware/storage"},
            {data: {id: 6, label: "Monitors"}, route: "/technology/hardware/monitors"},
            {data: {id: 7, label: "Peripherals"}, route: "/technology/hardware/peripherals"}
          ]
        },
        {
          data: {id: 4, label: "Innovation"},
          route: "/technology/innovation",
          children: [
            {data: {id: 1, label: "Artificial Intelligence"}, route: "/technology/innovation/ai"},
            {data: {id: 2, label: "Machine Learning"}, route: "/technology/innovation/ml"},
            {data: {id: 3, label: "Quantum Computing"}, route: "/technology/innovation/quantum"},
            {data: {id: 4, label: "Robotics"}, route: "/technology/innovation/robotics"},
            {data: {id: 5, label: "Biotech"}, route: "/technology/innovation/biotech"},
            {data: {id: 6, label: "Green Tech"}, route: "/technology/innovation/green-tech"},
            {data: {id: 7, label: "Autonomous Vehicles"}, route: "/technology/innovation/autonomous"}
          ]
        },
        {
          data: {id: 5, label: "Cybersecurity"},
          route: "/technology/cybersecurity",
          children: [
            {data: {id: 1, label: "Network Security"}, route: "/technology/cybersecurity/network"},
            {data: {id: 2, label: "Application Security"}, route: "/technology/cybersecurity/app-security"},
            {data: {id: 3, label: "Cloud Security"}, route: "/technology/cybersecurity/cloud"},
            {data: {id: 4, label: "IAM"}, route: "/technology/cybersecurity/iam"},
            {data: {id: 5, label: "Encryption"}, route: "/technology/cybersecurity/encryption"},
            {data: {id: 6, label: "Threat Intelligence"}, route: "/technology/cybersecurity/threat-intel"},
            {data: {id: 7, label: "Incident Response"}, route: "/technology/cybersecurity/incident-response"}
          ]
        }
      ]
    },

    /* ========================================
       2. HEALTH & WELLNESS
    ======================================== */
    {
      data: {id: 2, label: "Health & Wellness"},
      route: "/health",
      children: [
        {
          data: {id: 1, label: "Nutrition"},
          route: "/health/nutrition",
          children: [
            {data: {id: 1, label: "Balanced Diet"}, route: "/health/nutrition/balanced-diet"},
            {data: {id: 2, label: "Vitamins"}, route: "/health/nutrition/vitamins"},
            {data: {id: 3, label: "Healthy Recipes"}, route: "/health/nutrition/recipes"},
            {data: {id: 4, label: "Meal Planning"}, route: "/health/nutrition/meal-planning"},
            {data: {id: 5, label: "Hydration"}, route: "/health/nutrition/hydration"},
            {data: {id: 6, label: "Superfoods"}, route: "/health/nutrition/superfoods"},
            {data: {id: 7, label: "Weight Management"}, route: "/health/nutrition/weight-management"}
          ]
        },
        {
          data: {id: 2, label: "Fitness"},
          route: "/health/fitness",
          children: [
            {data: {id: 1, label: "Strength Training"}, route: "/health/fitness/strength"},
            {data: {id: 2, label: "Cardio"}, route: "/health/fitness/cardio"},
            {data: {id: 3, label: "Yoga"}, route: "/health/fitness/yoga"},
            {data: {id: 4, label: "Pilates"}, route: "/health/fitness/pilates"},
            {data: {id: 5, label: "Home Workouts"}, route: "/health/fitness/home"},
            {data: {id: 6, label: "Gym Training"}, route: "/health/fitness/gym"},
            {data: {id: 7, label: "Mobility Training"}, route: "/health/fitness/mobility"}
          ]
        },
        {
          data: {id: 3, label: "Mental Health"},
          route: "/health/mental",
          children: [
            {data: {id: 1, label: "Meditation"}, route: "/health/mental/meditation"},
            {data: {id: 2, label: "Stress Management"}, route: "/health/mental/stress"},
            {data: {id: 3, label: "Sleep Health"}, route: "/health/mental/sleep"},
            {data: {id: 4, label: "Mindfulness"}, route: "/health/mental/mindfulness"},
            {data: {id: 5, label: "Therapy"}, route: "/health/mental/therapy"},
            {data: {id: 6, label: "Burnout Prevention"}, route: "/health/mental/burnout"},
            {data: {id: 7, label: "Emotional Intelligence"}, route: "/health/mental/eq"}
          ]
        },
        {
          data: {id: 4, label: "Medical Care"},
          route: "/health/medical",
          children: [
            {data: {id: 1, label: "Primary Care"}, route: "/health/medical/primary"},
            {data: {id: 2, label: "Specialists"}, route: "/health/medical/specialists"},
            {data: {id: 3, label: "Preventive Care"}, route: "/health/medical/preventive"},
            {data: {id: 4, label: "Vaccinations"}, route: "/health/medical/vaccinations"},
            {data: {id: 5, label: "Chronic Illness"}, route: "/health/medical/chronic"},
            {data: {id: 6, label: "Diagnostics"}, route: "/health/medical/diagnostics"},
            {data: {id: 7, label: "Emergency Care"}, route: "/health/medical/emergency"}
          ]
        },
        {
          data: {id: 5, label: "Lifestyle"},
          route: "/health/lifestyle",
          children: [
            {data: {id: 1, label: "Healthy Habits"}, route: "/health/lifestyle/habits"},
            {data: {id: 2, label: "Work-Life Balance"}, route: "/health/lifestyle/work-life"},
            {data: {id: 3, label: "Relationships"}, route: "/health/lifestyle/relationships"},
            {data: {id: 4, label: "Personal Growth"}, route: "/health/lifestyle/growth"},
            {data: {id: 5, label: "Time Management"}, route: "/health/lifestyle/time"},
            {data: {id: 6, label: "Outdoor Activities"}, route: "/health/lifestyle/outdoors"},
            {data: {id: 7, label: "Self-Care"}, route: "/health/lifestyle/self-care"}
          ]
        }
      ]
    },

    /* ========================================
       3. EDUCATION
    ======================================== */
    {
      data: {id: 3, label: "Education"},
      route: "/education",
      children: [
        {
          data: {id: 1, label: "Primary Education"},
          route: "/education/primary",
          children: [
            {data: {id: 1, label: "Math Basics"}, route: "/education/primary/math"},
            {data: {id: 2, label: "Reading Skills"}, route: "/education/primary/reading"},
            {data: {id: 3, label: "Science Basics"}, route: "/education/primary/science"},
            {data: {id: 4, label: "Art Projects"}, route: "/education/primary/art"},
            {data: {id: 5, label: "History for Kids"}, route: "/education/primary/history"},
            {data: {id: 6, label: "Geography Basics"}, route: "/education/primary/geography"},
            {data: {id: 7, label: "Social Skills"}, route: "/education/primary/social"}
          ]
        },
        {
          data: {id: 2, label: "Secondary Education"},
          route: "/education/secondary",
          children: [
            {data: {id: 1, label: "Algebra"}, route: "/education/secondary/algebra"},
            {data: {id: 2, label: "Biology"}, route: "/education/secondary/biology"},
            {data: {id: 3, label: "Chemistry"}, route: "/education/secondary/chemistry"},
            {data: {id: 4, label: "Literature"}, route: "/education/secondary/literature"},
            {data: {id: 5, label: "World History"}, route: "/education/secondary/history"},
            {data: {id: 6, label: "Physics"}, route: "/education/secondary/physics"},
            {data: {id: 7, label: "Computer Science"}, route: "/education/secondary/cs"}
          ]
        },
        {
          data: {id: 3, label: "Higher Education"},
          route: "/education/higher",
          children: [
            {data: {id: 1, label: "Engineering"}, route: "/education/higher/engineering"},
            {data: {id: 2, label: "Business"}, route: "/education/higher/business"},
            {data: {id: 3, label: "Humanities"}, route: "/education/higher/humanities"},
            {data: {id: 4, label: "Medical Studies"}, route: "/education/higher/medical"},
            {data: {id: 5, label: "Sciences"}, route: "/education/higher/sciences"},
            {data: {id: 6, label: "Law"}, route: "/education/higher/law"},
            {data: {id: 7, label: "Computer Science"}, route: "/education/higher/cs"}
          ]
        },
        {
          data: {id: 4, label: "Online Learning"},
          route: "/education/online",
          children: [
            {data: {id: 1, label: "Video Courses"}, route: "/education/online/videos"},
            {data: {id: 2, label: "Interactive Lessons"}, route: "/education/online/interactive"},
            {data: {id: 3, label: "Certifications"}, route: "/education/online/certifications"},
            {data: {id: 4, label: "Coding Bootcamps"}, route: "/education/online/bootcamps"},
            {data: {id: 5, label: "Languages"}, route: "/education/online/languages"},
            {data: {id: 6, label: "Skill-Based Courses"}, route: "/education/online/skills"},
            {data: {id: 7, label: "Tutoring"}, route: "/education/online/tutoring"}
          ]
        },
        {
          data: {id: 5, label: "Career Development"},
          route: "/education/career",
          children: [
            {data: {id: 1, label: "Resumes"}, route: "/education/career/resumes"},
            {data: {id: 2, label: "Interview Prep"}, route: "/education/career/interview"},
            {data: {id: 3, label: "Career Paths"}, route: "/education/career/paths"},
            {data: {id: 4, label: "Professional Skills"}, route: "/education/career/skills"},
            {data: {id: 5, label: "Networking"}, route: "/education/career/networking"},
            {data: {id: 6, label: "Leadership"}, route: "/education/career/leadership"},
            {data: {id: 7, label: "Entrepreneurship"}, route: "/education/career/entrepreneurship"}
          ]
        }
      ]
    },

    /* ========================================
       4. ENTERTAINMENT
    ======================================== */
    {
      data: {id: 4, label: "Entertainment"},
      route: "/entertainment",
      children: [
        {
          data: {id: 1, label: "Movies"},
          route: "/entertainment/movies",
          children: [
            {data: {id: 1, label: "Action"}, route: "/entertainment/movies/action"},
            {data: {id: 2, label: "Drama"}, route: "/entertainment/movies/drama"},
            {data: {id: 3, label: "Comedy"}, route: "/entertainment/movies/comedy"},
            {data: {id: 4, label: "Sci-Fi"}, route: "/entertainment/movies/scifi"},
            {data: {id: 5, label: "Horror"}, route: "/entertainment/movies/horror"},
            {data: {id: 6, label: "Documentaries"}, route: "/entertainment/movies/documentaries"},
            {data: {id: 7, label: "Animated"}, route: "/entertainment/movies/animated"}
          ]
        },
        {
          data: {id: 2, label: "Music"},
          route: "/entertainment/music",
          children: [
            {data: {id: 1, label: "Pop"}, route: "/entertainment/music/pop"},
            {data: {id: 2, label: "Rock"}, route: "/entertainment/music/rock"},
            {data: {id: 3, label: "Hip-Hop"}, route: "/entertainment/music/hiphop"},
            {data: {id: 4, label: "Classical"}, route: "/entertainment/music/classical"},
            {data: {id: 5, label: "Jazz"}, route: "/entertainment/music/jazz"},
            {data: {id: 6, label: "Electronic"}, route: "/entertainment/music/electronic"},
            {data: {id: 7, label: "Indie"}, route: "/entertainment/music/indie"}
          ]
        },
        {
          data: {id: 3, label: "Gaming"},
          route: "/entertainment/gaming",
          children: [
            {data: {id: 1, label: "Action"}, route: "/entertainment/gaming/action"},
            {data: {id: 2, label: "Adventure"}, route: "/entertainment/gaming/adventure"},
            {data: {id: 3, label: "RPG"}, route: "/entertainment/gaming/rpg"},
            {data: {id: 4, label: "Simulation"}, route: "/entertainment/gaming/simulation"},
            {data: {id: 5, label: "Strategy"}, route: "/entertainment/gaming/strategy"},
            {data: {id: 6, label: "Multiplayer"}, route: "/entertainment/gaming/multiplayer"},
            {data: {id: 7, label: "Esports"}, route: "/entertainment/gaming/esports"}
          ]
        },
        {
          data: {id: 4, label: "Books"},
          route: "/entertainment/books",
          children: [
            {data: {id: 1, label: "Fiction"}, route: "/entertainment/books/fiction"},
            {data: {id: 2, label: "Non-Fiction"}, route: "/entertainment/books/nonfiction"},
            {data: {id: 3, label: "Mystery"}, route: "/entertainment/books/mystery"},
            {data: {id: 4, label: "Fantasy"}, route: "/entertainment/books/fantasy"},
            {data: {id: 5, label: "Self-Help"}, route: "/entertainment/books/selfhelp"},
            {data: {id: 6, label: "Biographies"}, route: "/entertainment/books/biographies"},
            {data: {id: 7, label: "Science"}, route: "/entertainment/books/science"}
          ]
        },
        {
          data: {id: 5, label: "Events"},
          route: "/entertainment/events",
          children: [
            {data: {id: 1, label: "Concerts"}, route: "/entertainment/events/concerts"},
            {data: {id: 2, label: "Festivals"}, route: "/entertainment/events/festivals"},
            {data: {id: 3, label: "Sports"}, route: "/entertainment/events/sports"},
            {data: {id: 4, label: "Theatre"}, route: "/entertainment/events/theatre"},
            {data: {id: 5, label: "Comedy Shows"}, route: "/entertainment/events/comedy"},
            {data: {id: 6, label: "Exhibitions"}, route: "/entertainment/events/exhibitions"},
            {data: {id: 7, label: "Conventions"}, route: "/entertainment/events/conventions"}
          ]
        }
      ]
    },

    /* ========================================
       5. TRAVEL
    ======================================== */
    {
      data: {id: 5, label: "Travel"},
      route: "/travel",
      children: [
        {
          data: {id: 1, label: "Destinations"},
          route: "/travel/destinations",
          children: [
            {data: {id: 1, label: "Beaches"}, route: "/travel/destinations/beaches"},
            {data: {id: 2, label: "Mountains"}, route: "/travel/destinations/mountains"},
            {data: {id: 3, label: "Cities"}, route: "/travel/destinations/cities"},
            {data: {id: 4, label: "National Parks"}, route: "/travel/destinations/parks"},
            {data: {id: 5, label: "Islands"}, route: "/travel/destinations/islands"},
            {data: {id: 6, label: "Cultural Sites"}, route: "/travel/destinations/cultural"},
            {data: {id: 7, label: "Adventure Spots"}, route: "/travel/destinations/adventure"}
          ]
        },
        {
          data: {id: 2, label: "Transportation"},
          route: "/travel/transportation",
          children: [
            {data: {id: 1, label: "Flights"}, route: "/travel/transportation/flights"},
            {data: {id: 2, label: "Trains"}, route: "/travel/transportation/trains"},
            {data: {id: 3, label: "Car Rentals"}, route: "/travel/transportation/cars"},
            {data: {id: 4, label: "Public Transit"}, route: "/travel/transportation/public-transit"},
            {data: {id: 5, label: "Cruises"}, route: "/travel/transportation/cruises"},
            {data: {id: 6, label: "Ride Sharing"}, route: "/travel/transportation/rideshare"},
            {data: {id: 7, label: "Travel Passes"}, route: "/travel/transportation/passes"}
          ]
        },
        {
          data: {id: 3, label: "Accommodation"},
          route: "/travel/accommodation",
          children: [
            {data: {id: 1, label: "Hotels"}, route: "/travel/accommodation/hotels"},
            {data: {id: 2, label: "Resorts"}, route: "/travel/accommodation/resorts"},
            {data: {id: 3, label: "Hostels"}, route: "/travel/accommodation/hostels"},
            {data: {id: 4, label: "Vacation Rentals"}, route: "/travel/accommodation/rentals"},
            {data: {id: 5, label: "Boutique Stays"}, route: "/travel/accommodation/boutique"},
            {data: {id: 6, label: "Eco Lodges"}, route: "/travel/accommodation/eco"},
            {data: {id: 7, label: "Camping Sites"}, route: "/travel/accommodation/camping"}
          ]
        },
        {
          data: {id: 4, label: "Planning"},
          route: "/travel/planning",
          children: [
            {data: {id: 1, label: "Itineraries"}, route: "/travel/planning/itineraries"},
            {data: {id: 2, label: "Budget Planning"}, route: "/travel/planning/budget"},
            {data: {id: 3, label: "Insurance"}, route: "/travel/planning/insurance"},
            {data: {id: 4, label: "Visas"}, route: "/travel/planning/visas"},
            {data: {id: 5, label: "Packing Guides"}, route: "/travel/planning/packing"},
            {data: {id: 6, label: "Navigation"}, route: "/travel/planning/navigation"},
            {data: {id: 7, label: "Travel Tips"}, route: "/travel/planning/tips"}
          ]
        },
        {
          data: {id: 5, label: "Experiences"},
          route: "/travel/experiences",
          children: [
            {data: {id: 1, label: "Food Tours"}, route: "/travel/experiences/food"},
            {data: {id: 2, label: "Wildlife"}, route: "/travel/experiences/wildlife"},
            {data: {id: 3, label: "Adventure Sports"}, route: "/travel/experiences/sports"},
            {data: {id: 4, label: "Cultural"}, route: "/travel/experiences/cultural"},
            {data: {id: 5, label: "Scenic Tours"}, route: "/travel/experiences/scenic"},
            {data: {id: 6, label: "Luxury Travel"}, route: "/travel/experiences/luxury"},
            {data: {id: 7, label: "Local Activities"}, route: "/travel/experiences/local"}
          ]
        }
      ]
    }
  ];
  /*
  * Smaller screens code
  */

  menuLogic: {
    parent: NavRoute | null,
    subParent: NavRoute | null,
  } = {
    parent: null,
    subParent: null,
  }

  menuAnimation: {
    opened: boolean,
    areSubParentRoutesVisible: boolean,
    areChildRoutesVisible: boolean
  } = {
    opened: false,
    areSubParentRoutesVisible: false,
    areChildRoutesVisible: false
  }

  switchMenu(state: boolean) {
    this.menuAnimation.opened = state;
  }

  goBack() {
    if (this.menuAnimation.areChildRoutesVisible) {
      this.menuAnimation.areChildRoutesVisible = false;
      this.router.navigate([this.menuLogic.parent!.route])
    } else if (this.menuAnimation.areSubParentRoutesVisible) {
      this.menuAnimation.areSubParentRoutesVisible = false;
      this.router.navigate([''])
    } else {
      this.menuAnimation.opened = false;
    }
  }

  showParentRoutes(route: NavRoute) {
    this.menuAnimation.areSubParentRoutesVisible = true;
    this.menuLogic.parent = route;
  }

  showSubParentRoutes(route: NavRoute) {
    this.menuAnimation.areChildRoutesVisible = true;
    this.menuLogic.subParent = route;
  }

  /*
  * Larger screens code
  */

  exposedParent: NavRoute | null = null

  hoverExpose(parent: NavRoute | null) {
    this.exposedParent = parent;
  }

  public getRoute(parentID: number, subParentID?: number, childID?: number) {
    let data: NavRoute | undefined = this.shownRoutes.find(route => route.data.id === parentID);
    if (data && subParentID) {
      data = data.children!.find(route => route.data.id === subParentID);
    }
    if (data && childID) {
      data = data.children!.find(route => route.data.id === childID);
    }
    return data;
  }

  public getRouteFromFragments(parentFragment: string, subParentFragment?: string, childFragment?: string) {
    let dataParent: NavRoute | undefined = this.shownRoutes.find(route => route.route === "/" + parentFragment);
    let dataSubParent: NavRoute | undefined
    let dataChild: NavRoute | undefined
    if (dataParent && subParentFragment) {
      dataSubParent = dataParent.children!.find(route => route.route === "/" + parentFragment + "/" + subParentFragment);
    }
    if (dataSubParent && childFragment) {
      dataChild = dataSubParent.children!.find(route => route.route === "/" + parentFragment + "/" + subParentFragment + "/" + childFragment);
    }
    return [dataParent, dataSubParent, dataChild];
  }

}

interface NavRoute {
  data: { id: number, label: string },
  route: string,
  children?: NavRoute[],
}
