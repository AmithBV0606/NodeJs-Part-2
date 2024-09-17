# JWT Authentication in NodeJs

### Problem with stateful notification : 
    1) If server re-starts , the state will be lost and all the users will be logged out.

    2) Stateful authentication is memory intensive, means it uses server's memory.

__NOTE :__ To overcome the above mentioned problem, we have stateless authentication.