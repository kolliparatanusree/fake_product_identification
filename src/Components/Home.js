import React, { useContext } from 'react';
import './Home.css';
function Home(props) {
  return (
    <div className='homepage'>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <h2>Wanna Choose the Right Product</h2>
              <p>
                The fake product problem is a growing concern characterized by
                the proliferation of counterfeit goods in the market. These
                products imitate genuine items, often deceiving consumers with
                substandard quality and potential safety risks. This widespread
                issue undermines trust in brands, harms legitimate businesses,
                and poses serious threats to consumer well-being. Efforts to
                combat the fake product problem involve increased regulatory
                measures, technological solutions, and consumer awareness
                campaigns to mitigate the impact on the economy and public
                safety.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h2>Choose the Right One</h2>
              <p>
                Choosing the right product ensures satisfaction, functionality,
                and value for money. It meets specific needs, enhances user
                experience, and minimizes buyer's remorse. A well-suited product
                aligns with individual preferences, leading to increased
                efficiency and enjoyment. Moreover, it promotes long-term
                durability and reduces the likelihood of replacements or
                repairs. Ultimately, selecting the right product contributes to
                overall happiness and a positive consumer relationship with the
                brand.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;