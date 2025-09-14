import React, { useState } from 'react';

function Cast() {
    const [isPlay, setIsPlay] = useState(false);
    const [isPower, setIsPower] = useState(false);
    const [currentSession, setCurrentSession] = useState(null);
    const [mediaSession, setMediaSession] = useState(null);
    const [volume, setVolume] = useState(0.5)
    const [isMute, setIsMute] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


    const videoList = [
        'https://transfertco.ca/video/DBillPrelude.mp4',
        'https://transfertco.ca/video/DBillSpotted.mp4',
        'https://transfertco.ca/video/usa23_7_02.mp4',
    ];



    const handleVolumeUp = () => {

        const newVolume = volume + 0.1
        currentSession.setReceiverVolumeLevel(newVolume, onVolumeSuccess, onError)
        setVolume(newVolume)
    };

    const handleVolumeDown = () => {

        const newVolume = volume - 0.1
        currentSession.setReceiverVolumeLevel(newVolume, onVolumeSuccess, onError)
        setVolume(newVolume)
    };

    const handleMute = () => {
        if (isMute) {
            currentSession.setReceiverMuted(false, onVolumeSuccess, onError)
            setIsMute(false)


        } else {
            currentSession.setReceiverMuted(true, onVolumeSuccess, onError)
            setIsMute(true)
            setVolume(0)


        }

    };


    const sessionListener = (newSession) => {
        console.log("CurrentSession received");
        setIsPower(true)
        setCurrentSession(newSession);
        loadMedia(newSession);

    };

    const receiverListener = (available) => {
        console.log("Receiver listener value received = " + available);
    };

    const onInitSuccess = () => {
        //debut scene 1
        console.time('scenario1')
        console.log("Init succes");
    };

    const onVolumeSuccess = () => {

        console.log("Volume succes");
    };
    const onPlaySuccess = () => {

        console.log("Play succes");
    };

    const onAdvanceSuccess = () => {

        console.log("Advance 10s succes");
    };

    const onRewindSuccess = () => {

        console.log("Rewind 10s succes");
    };

    const successCallback = () => {

        console.log("Session stopped succes");
    };

    const onError = (error) => {
        console.log("Error = " + error.code);

    };


    const initialize = () => {
        if (currentSession) {
            currentSession.stop(successCallback, onError)
            setCurrentSession(null)  
            setIsPower(false)     
          //fin scene 1
          console.timeEnd('scenario1');
        } else {
            const sessionRequest = new chrome.cast.SessionRequest(
                chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
            );

            const apiConfig = new chrome.cast.ApiConfig(
                sessionRequest, sessionListener, receiverListener
            );

            chrome.cast.initialize(apiConfig, onInitSuccess, onError)
            setIsPower(true)
        }


    };

    const loadMedia = (newSession) => {

        const mediaInfo = new chrome.cast.media.MediaInfo(videoList[currentVideoIndex], 'video/mp4');
        const request = new chrome.cast.media.LoadRequest(mediaInfo);
        newSession.loadMedia(request, mediaSession => {
            console.log("Media chargé avec succes (promise)");
            setMediaSession(mediaSession);


        },
            onError);
    }


    const handlePlayBtn = () => {
        if (isPlay == true) {
            mediaSession.play(new chrome.cast.media.PlayRequest(), onPlaySuccess, onError)
            setIsPlay(false)

        }
        else {
            mediaSession.pause(new chrome.cast.media.PauseRequest(), onPlaySuccess, onError)
            setIsPlay(true)
        }
    };
    /////Avancer de video
    const handleNextVideo = () => {
        const nvIndex = currentVideoIndex + 1
        setCurrentVideoIndex(nvIndex)
        const mediaInfo = new chrome.cast.media.MediaInfo(videoList[nvIndex], 'video/mp4');
        const request = new chrome.cast.media.LoadRequest(mediaInfo);
        currentSession.loadMedia(request, newMediaSession => {
            console.log("Media chargé avec succes (promise)");
            setMediaSession(newMediaSession);
  
        },
            onError);
    }

    ///Reculer de video
    const handlePreviousVideo = () => {
        const nvIndex = currentVideoIndex - 1
        setCurrentVideoIndex(nvIndex)
        const mediaInfo = new chrome.cast.media.MediaInfo(videoList[nvIndex], 'video/mp4');
        const request = new chrome.cast.media.LoadRequest(mediaInfo);
        currentSession.loadMedia(request, newMediaSession => {
            console.log("Media chargé avec succes (promise)");
            setMediaSession(newMediaSession);

        },
            onError);
    }



    //avancer la video de 10s
    const handleAdvanceVideo10s = () => {
        const tempsVideo = mediaSession.getEstimatedTime() + 10
        let seekRequest = new chrome.cast.media.SeekRequest()
        seekRequest.currentTime = tempsVideo
        mediaSession.seek(seekRequest, onAdvanceSuccess, onError)

    }


    //reculer la video de 10s  
    const handleRewindVideo10s = () => {
        const tempsVideo = mediaSession.getEstimatedTime() - 10
        let seekRequest = new chrome.cast.media.SeekRequest()
        seekRequest.currentTime = tempsVideo
        mediaSession.seek(seekRequest, onRewindSuccess, onError)
    }


    return { initialize, handlePlayBtn, isPlay, isPower, handleVolumeUp, handleVolumeDown, handleMute, volume, handleNextVideo, handlePreviousVideo, handleAdvanceVideo10s, handleRewindVideo10s }



}

export default Cast;