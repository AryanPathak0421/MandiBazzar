import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../../context/LoadingContext';
import './iconLoader.css';

interface IconLoaderProps {
  forceShow?: boolean;
}

const IconLoader: React.FC<IconLoaderProps> = ({ forceShow = false }) => {
  // Disabled: Loading animation removed for snappier UX
  // const { isRouteLoading } = useLoading();
  // const show = isRouteLoading || forceShow;
  
  // Return null to completely disable the loader
  return null;
};

export default IconLoader;
