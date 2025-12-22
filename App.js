import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
    <div className="logo-conatiner">
      <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/020/437/792/small/panda-logo-food-vector.jpg"></img>
    </div>
    <div className="Nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo} = resData.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId }/>
      <h3>{name}</h3>
      <h4>Best in {cuisines.join(", ")}</h4>
      <h4>{costForTwo} for two</h4>
      <h4>{avgRating}⭐</h4>
    </div>
  );
};


const resList=[
                                    {
                                        "info": {
                                            "id": "10576",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
                                            "locality": "6th Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "721",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "22K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 1.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.6",
                                                    "ratingCount": "3.6K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "393840",
                                            "name": "Chinese Wok",
                                            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                                            "locality": "Chikka Lakshmaiah Layout",
                                            "areaName": "Adugodi",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Asian",
                                                "Tibetan",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "61955",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "6.5K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-adugodi-rest393840",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "5934",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
                                            "locality": "Koramangala",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "166",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "103K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 1.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 06:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "4.4K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "391005",
                                            "name": "ZAZA Mughal Biryani",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d8552b11-ea4b-46e6-8b5c-287640b049cf_391005.jpg",
                                            "locality": "Patel Narayana Reddy Layout",
                                            "areaName": "EJIPURA",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "North Indian",
                                                "Awadhi"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "22473",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "654",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 0.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-20 mins",
                                                "lastMileTravelString": "0.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-patel-narayana-reddy-layout-ejipura-rest391005",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "656392",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
                                            "locality": "1st Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "2",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "4.7K+",
                                            "sla": {
                                                "deliveryTime": 13,
                                                "lastMileTravel": 1.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹69"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "375041",
                                            "name": "Andhra Gunpowder",
                                            "cloudinaryImageId": "byilgyrcfz690ryoasww",
                                            "locality": "6th Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Andhra",
                                                "Biryani",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "10496",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "6.5K+",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 0.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "0.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "643665",
                                            "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/01f48b92-adaf-444d-a404-f49d23f0bf6c_643665.jpg",
                                            "locality": "Patel Narayana Reddy Layout",
                                            "areaName": "Ejipura",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Healthy Food",
                                                "Salads",
                                                "Keto",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "355285",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "717",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 0.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-30 mins",
                                                "lastMileTravelString": "0.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    },
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-patel-narayana-reddy-layout-ejipura-rest643665",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "717421",
                                            "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/1b14de7e-7efc-4eaa-aa07-95f1ab50dc58_717421 (1).jpg",
                                            "locality": "BTM Layout",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "wrap",
                                                "Fast Food",
                                                "Pastas",
                                                "Italian",
                                                "Salads",
                                                "Healthy Food",
                                                "Desserts",
                                                "Continental"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "21019",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "4.9K+",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 1.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "671928",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/6cec62e3-0e46-4568-b442-46ab91bfe078_671928.JPG",
                                            "locality": "7th Block",
                                            "areaName": "Koramangla",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "547",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "6.1K+",
                                            "sla": {
                                                "deliveryTime": 13,
                                                "lastMileTravel": 1.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "23678",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
                                            "locality": "5th Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Beverages",
                                                "Cafe",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "630",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "65K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 1.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "158855",
                                            "name": "Candice's Gourmet Sandwiches & Wraps",
                                            "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
                                            "locality": "5th Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "Salads",
                                                "sandwich",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "465403",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "4.5K+",
                                            "sla": {
                                                "deliveryTime": 18,
                                                "lastMileTravel": 0.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "596862",
                                            "name": "Moplah's",
                                            "cloudinaryImageId": "bc9fbf67eb01738aed2a6cfb061ada89",
                                            "locality": "5th Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹800 for two",
                                            "cuisines": [
                                                "Kerala",
                                                "Biryani",
                                                "Seafood",
                                                "Beverages",
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "356891",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "1.7K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 15:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/moplahs-5th-block-koramangala-rest596862",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "711368",
                                            "name": "Salad Days",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/25096164-c2f3-4c3c-a6d8-eed9917375cd_711368.jpg",
                                            "locality": "BTM Layout",
                                            "areaName": "HSR",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Salads"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "796",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "6.0K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "718430",
                                            "name": "The Pizza Bakery - Wood Fired Sourdough",
                                            "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                                            "locality": "BTM Layout",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹700 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Italian",
                                                "Desserts",
                                                "Continental",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "522292",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "3.0K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 1.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-btm-layout-koramangala-rest718430",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "41913",
                                            "name": "Chinita Real Mexican Food",
                                            "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
                                            "locality": "Koramangala",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹750 for two",
                                            "cuisines": [
                                                "Mexican",
                                                "Salads",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "5064",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "8.1K+",
                                            "sla": {
                                                "deliveryTime": 16,
                                                "lastMileTravel": 0.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "2.2K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/chinita-real-mexican-food-koramangala-rest41913",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "586682",
                                            "name": "Dum Safar Biryani",
                                            "cloudinaryImageId": "aouhnkmtmchfkiowm8ou",
                                            "locality": "1st Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Kebabs",
                                                "North Indian",
                                                "Barbecue"
                                            ],
                                            "avgRating": 3.9,
                                            "parentId": "351013",
                                            "avgRatingString": "3.9",
                                            "totalRatingsString": "712",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 2.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-22 16:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/dum-safar-biryani-1st-block-koramangala-rest586682",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "750225",
                                            "name": "Daily Kitchen - Everyday Homely Meals",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/8f5cea18-dacd-4392-a877-8444e6a0e8aa_750225.jpg",
                                            "locality": "6TH BLOCK",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Home Food",
                                                "Indian",
                                                "North Indian",
                                                "Thalis"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "444382",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "898",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 0.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-20 mins",
                                                "lastMileTravelString": "0.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-everyday-homely-meals-6th-block-koramangala-rest750225",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "70012",
                                            "name": "SMOOR",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/8/2e244184-77c5-4509-a98b-4fe3c07ffbb3_70012.JPG",
                                            "locality": "7th Block",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Asian",
                                                "Burgers",
                                                "Italian",
                                                "Thai",
                                                "Sushi",
                                                "Salads",
                                                "Pastas",
                                                "Pizzas",
                                                "Mexican",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "3506",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "8.8K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 1.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "ABOVE ₹159",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/smoor-7th-block-koramangala-rest70012",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "38634",
                                            "name": "Third Wave Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/77b98331-896e-46e2-9ba2-bebd8b03103e_38634.JPG",
                                            "locality": "Koramangala",
                                            "areaName": "Koramangala",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Bakery",
                                                "Continental"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "274773",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "7.1K+",
                                            "sla": {
                                                "deliveryTime": 11,
                                                "lastMileTravel": 0.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "0.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-23 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.4",
                                                    "ratingCount": "4.8K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fcfc020e-4949-4816-8fb5-c9b40f37b043"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/third-wave-coffee-koramangala-rest38634",
                                            "type": "WEBLINK"
                                        }
                                    }];


const Body = () => {
  return (
    <div className="body">
      <h2 className="menu-heading">Restaurant Menu</h2>
      <div className="search">Search</div>
      <div className="res-menu-container">
        {resList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (<div className="App">
    <Header/>
    <Body/>
  </div>);
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);