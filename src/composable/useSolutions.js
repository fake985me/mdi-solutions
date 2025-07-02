import a from '@/assets/static/solutions/training.jpg'
import b from '@/assets/static/solutions/Remote.jpg'
import c from '@/assets/static/solutions/onsite.jpg'
import d from '@/assets/static/solutions/managed.jpg'
import e from '@/assets/static/solutions/cable.jpg'

const features = [
  {
    id: 1,
    name: 'Training',
    details: {
      imageUrl: a,
      title: 'Training',
      description:
        'This training is designed to provide a comprehensive understanding of GPON (Gigabit Passive Optical Network) technology, covering basic theory, network architecture, device introduction, to installation and configuration practices. GPON is a modern fiber optic network solution that is widely used by internet service providers (ISPs), telecommunications operators, and enterprises.',
    },
  },
  {
    id: 2,
    name: 'Remote Support',
    details: {
      imageUrl: b,
      title: 'Provide direction and help resolve problems remotely',
      description:
        'Troubleshooting, Configuration changes, Network audits, Customer migration, Additions, Changes, Software upgrades, 24x7 help desk support, and more.',
    },
  },
  {
    id: 3,
    name: 'On-Site Support',
    details: {
      imageUrl: c,
      title: 'Coming to the location to provide support',
      description:
        'Professional support engineers, resident engineers, equipment and installation engineers (E,F & I), and more.',
    },
  },
  {
    id: 4,
    name: 'Managed Services',
    details: {
      imageUrl: d,
      title: 'Eficient network management',
      description:
        'Service solutions to facilitate network efficiency in your business. We provide managed services to ensure your network runs smoothly and efficiently.',
    },
  },
  {
    id: 5,
    name: 'Installation Services',
    details: {
      imageUrl: e,
      title: 'true and correct installation of equipment',
      description:
        'We ensure that your equipment is installed correctly and efficiently. Our team of experts will handle the installation process to ensure everything is set up properly.',
    },
  },
]
export default features
