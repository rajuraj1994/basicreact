const shippingHandler=()=>{
        navigate('/signin?redirect=shipping')
    }



// change in login 
 const redirectUser = () => {
        const redirect = '/profile';
        const searchParams = new URLSearchParams(window.location.search);
        const redirectParam = searchParams.get('redirect');
        
        if (redirectToPage) {
          if (user && user.role === 1) {
            navigate('/admin/dashboard');
          } else if (redirectParam === 'shipping') {
            navigate('/shipping');
          } else {
            navigate(redirect);
          }
        }
      };
