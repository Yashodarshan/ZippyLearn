import { LightningElement } from 'lwc';

export default class VideoGrid extends LightningElement {
    /**
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/Yq0QkCxoTHM" title="Google’s AI Course for Beginners (in 10 minutes)!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/rfscVS0vtbw" title="Learn Python - Full Course for Beginners [Tutorial]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/v4cd1O4zkGw?list=PLX6IKgS15Ue02WDPRCmYKuZicQHit9kFt" title="Big O Notation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * 
     * <iframe width="1017" height="575" src="https://www.youtube.com/embed/kp3fCihUXEg" title="Top 7 Algorithms for Coding Interviews Explained SIMPLY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/1t1_a1BZ04o" title="How to NOT Fail a Technical Interview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/fQW6-2yfsBY" title="How To Pass Coding Interviews Like the Top 1%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * 
     * <iframe width="1028" height="575" src="https://www.youtube.com/embed/XmRNIGqzuRI" title="Steve Jobs on Essense of Product Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * 
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/Se1aTnFD500" title="15 Product Management Terms and Concepts Everyone In Tech Should Know" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * 
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/DSV-vuvmIro" title="Flipkart Product Manager Mock Interview: Root Cause Analysis (Razorpay PM)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/CXdaPETE7iE" title="Google Maps Product Manager Mock Interview ft. Microsoft PM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/M2h8xhvS0p0" title="Product Management Full Course | Product Management Tutorial for Beginners | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     * <iframe width="1022" height="575" src="https://www.youtube.com/embed/vvVCBHXa4xY?list=PLmkYe7soBKTwhvtJrs439pLsMyfE4CGDG" title="PRODUCT MANAGEMENT | CRASH COURSE | EPISODE - 0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     */
    pythonVideos = [
        { id: 1, src: 'https://www.youtube.com/embed/Yq0QkCxoTHM' },
        { id: 2, src: 'https://www.youtube.com/embed/rfscVS0vtbw' },
        { id: 3, src: 'https://www.youtube.com/embed/v4cd1O4zkGw' },
        { id: 4, src: 'https://www.youtube.com/embed/kp3fCihUXEg' },
        { id: 5, src: 'https://www.youtube.com/embed/1t1_a1BZ04o' },
        { id: 6, src: 'https://www.youtube.com/embed/fQW6-2yfsBY' }
    ];

    siVideos = [
        { id: 7, src: 'https://www.youtube.com/embed/XmRNIGqzuRI' },
        { id: 8, src: 'https://www.youtube.com/embed/Se1aTnFD500' },
        { id: 9, src: 'https://www.youtube.com/embed/DSV-vuvmIro' },
        { id: 10, src: 'https://www.youtube.com/embed/CXdaPETE7iE' },
        { id: 11, src: 'https://www.youtube.com/embed/M2h8xhvS0p0' },
        { id: 12, src: 'https://www.youtube.com/embed/vvVCBHXa4xY?list=PLmkYe7soBKTwhvtJrs439pLsMyfE4CGDG' }
    ];
}