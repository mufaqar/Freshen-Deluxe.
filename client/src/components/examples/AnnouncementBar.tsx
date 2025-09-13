import AnnouncementBar from '../AnnouncementBar'

export default function AnnouncementBarExample() {
  return (
    <AnnouncementBar 
      message="Limited Time: Get 20% off your first deep cleaning service this month"
      actionText="Book Now"
      onAction={() => console.log('Announcement action triggered')}
    />
  )
}