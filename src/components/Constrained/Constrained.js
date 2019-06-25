import React from 'react';
import './Constrained.css';
import thingsPhoto from '../../assets/things.jpg';

const Constrained = () => {
  return (
    <div className="constrained__container">
      <h3 className="featured__title">Here is some constrained content</h3>
      <p>
        Where the metal hits the meat player-coach but upsell so please use
        "solutionise" instead of solution ideas! :). Turn the crank what are the
        expectations and collaboration through advanced technlogy yet we need to
        dialog around your choice of work attire are there any leftovers in the
        kitchen? those options are already baked in with this model, yet clear
        blue water.
      </p>
      <p>
        Products need full resourcing and support from a cross-functional team
        in order to be built, maintained, and evolved quick-win or
        root-and-branch review. We need to get all stakeholders up to speed and
        in the right place nobody's fault it could have been managed better
        drink from the firehose we need to make the new version clean and sexy
        crisp ppt.
      </p>
      <p>
        Net net mobile friendly. Synergize productive mindfulness bench mark,
        loop back. Quick win synergize productive mindfulness nor hit the ground
        running yet when does this sunset?
      </p>
      <div className="constrained__featured">
        <div className="featured__item">
          <h5 className="featured__title">List of things</h5>
          <ul>
            <li>• Thing 1</li>
            <li>• Another thing</li>
            <li>• THE thing</li>
            <li>• Thingamabob</li>
            <li>• Thingles</li>
          </ul>
        </div>
        <div className="featured__item">
          <h5 className="featured__title">Have you heard</h5>

          <p>There was a duck at a store.</p>
          <p>He ate for free. I should have ordered him more expensive food!</p>
          <p>The lesson here is DUCKS EAT FOR FREE at that restaurant.</p>
        </div>
        <div className="featured__item">
          <h5 className="featured__title">Picture of some things</h5>
          <div className="featured__things">
            <div className="featured__picture">
              <img src={thingsPhoto} />
            </div>
            <p>
              These guys are pretty coo’. Thing one and thing 2. You'll like
              what they do. Such fun from so few!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constrained;
