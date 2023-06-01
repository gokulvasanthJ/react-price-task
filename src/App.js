import React from 'react';
import Card from "./component/Card";


function App() {
  let data=[
    {
    plan:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicproject:"Unlimited Public Projects",
    publicprojectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privatePfojects:"Unlimited Private Projects",
    privatePfojectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free Subdomain",
    subDomainEnabler:false,
    statusReport:"Monthly Status Report",
    statusReportEnabler:false
    },
    {plan:"PLUS",
    price:"9",
    user:"5 User",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicproject:"Unlimited Public Projects",
    publicprojectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privatePfojects:"Unlimited Private Projects",
    privatePfojectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free Subdomain",
    subDomainEnabler:true,
    statusReport:"Monthly Status Report",
    statusReportEnabler:false
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicproject:"Unlimited Public Projects",
    publicprojectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privatePfojects:"Unlimited Private Projects",
    privatePfojectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free Subdomain",
    subDomainEnabler:true,
    statusReport:"Monthly Status Report",
    statusReportEnabler:true
    }
  ]

  return <>  
 <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
     {data.map((e,i)=>{
      return <Card details={e} key={i}/>
     })}
      
    </div>
  </div>
</section>
  </>
}

export default App;


